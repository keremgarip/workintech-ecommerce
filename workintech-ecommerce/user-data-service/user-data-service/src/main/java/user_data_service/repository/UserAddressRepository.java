package user_data_service.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import user_data_service.entity.UserAddress;
import java.util.List;


public interface UserAddressRepository extends JpaRepository<UserAddress, Long>{
    List<UserAddress> findByUserId(Long userId);
}
