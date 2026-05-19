package user_data_service.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import user_data_service.dto.UserAddressRequest;
import user_data_service.dto.UserAddressResponse;
import user_data_service.service.UserAddressService;

import java.util.List;

@RestController
@RequestMapping("/api/external-users/{userId}/addresses")
@RequiredArgsConstructor
public class UserAddressController {

    private final UserAddressService service;

    @GetMapping
    public List<UserAddressResponse> getAddresses(@PathVariable Long userId) {
        return service.getAddresses(userId);
    }

    @PostMapping
    public UserAddressResponse createAddress(
            @PathVariable Long userId,
            @RequestBody UserAddressRequest request
    ) {
        return service.createAddress(userId, request);
    }

    @PutMapping("/{addressId}")
    public UserAddressResponse updateAddress(
            @PathVariable Long userId,
            @PathVariable Long addressId,
            @RequestBody UserAddressRequest request
    ) {
        return service.updateAddress(userId, addressId, request);
    }

    @DeleteMapping("/{addressId}")
    public void deleteAddress(
            @PathVariable Long userId,
            @PathVariable Long addressId
    ) {
        service.deleteAddress(userId, addressId);
    }
}
