package user_data_service.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import user_data_service.dto.UserAddressRequest;
import user_data_service.dto.UserAddressResponse;
import user_data_service.entity.UserAddress;
import user_data_service.repository.UserAddressRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserAddressService {

    private final UserAddressRepository repository;

    public List<UserAddressResponse> getAddresses(Long userId) {
        return repository.findByUserId(userId)
                .stream()
                .map(this::toResponse)
                .toList();
    }

    public UserAddressResponse createAddress(Long userId, UserAddressRequest request) {
        UserAddress address = UserAddress.builder()
                .userId(userId)
                .title(request.getTitle())
                .name(request.getName())
                .surname(request.getSurname())
                .phone(request.getPhone())
                .city(request.getCity())
                .district(request.getDistrict())
                .neighborhood(request.getNeighborhood())
                .address(request.getAddress())
                .build();

        return toResponse(repository.save(address));
    }

    public UserAddressResponse updateAddress(Long userId, Long addressId, UserAddressRequest request) {
        UserAddress address = repository.findById(addressId)
                .orElseThrow(() -> new RuntimeException("Address not found"));

        if (!address.getUserId().equals(userId)) {
            throw new RuntimeException("Address does not belong to user");
        }

        address.setTitle(request.getTitle());
        address.setName(request.getName());
        address.setSurname(request.getSurname());
        address.setPhone(request.getPhone());
        address.setCity(request.getCity());
        address.setDistrict(request.getDistrict());
        address.setNeighborhood(request.getNeighborhood());
        address.setAddress(request.getAddress());

        return toResponse(repository.save(address));
    }

    public void deleteAddress(Long userId, Long addressId) {
        UserAddress address = repository.findById(addressId)
                .orElseThrow(() -> new RuntimeException("Address not found"));

        if (!address.getUserId().equals(userId)) {
            throw new RuntimeException("Address does not belong to user");
        }

        repository.delete(address);
    }

    private UserAddressResponse toResponse(UserAddress address) {
        return UserAddressResponse.builder()
                .id(address.getId())
                .userId(address.getUserId())
                .title(address.getTitle())
                .name(address.getName())
                .surname(address.getSurname())
                .phone(address.getPhone())
                .city(address.getCity())
                .district(address.getDistrict())
                .neighborhood(address.getNeighborhood())
                .address(address.getAddress())
                .build();
    }
}
