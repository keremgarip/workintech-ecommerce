package user_data_service.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import user_data_service.dto.UserCardRequest;
import user_data_service.dto.UserCardResponse;
import user_data_service.entity.UserCard;
import user_data_service.repository.UserCardRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserCardService {

    private final UserCardRepository repository;

    public List<UserCardResponse> getCards(Long userId) {
        return repository.findByUserId(userId)
                .stream()
                .map(this::toResponse)
                .toList();
    }

    public UserCardResponse createCard(Long userId, UserCardRequest request) {
        UserCard card = UserCard.builder()
                .userId(userId)
                .cardHolderName(request.getCardHolderName())
                .cardNumber(request.getCardNumber())
                .expireMonth(request.getExpireMonth())
                .expireYear(request.getExpireYear())
                .cvv(request.getCvv())
                .build();

        return toResponse(repository.save(card));
    }

    public UserCardResponse updateCard(Long userId, Long cardId, UserCardRequest request) {
        UserCard card = repository.findById(cardId)
                .orElseThrow(() -> new RuntimeException("Card not found"));

        if (!card.getUserId().equals(userId)) {
            throw new RuntimeException("Card does not belong to user");
        }

        card.setCardHolderName(request.getCardHolderName());
        card.setCardNumber(request.getCardNumber());
        card.setExpireMonth(request.getExpireMonth());
        card.setExpireYear(request.getExpireYear());
        card.setCvv(request.getCvv());

        return toResponse(repository.save(card));
    }

    public void deleteCard(Long userId, Long cardId) {
        UserCard card = repository.findById(cardId)
                .orElseThrow(() -> new RuntimeException("Card not found"));

        if (!card.getUserId().equals(userId)) {
            throw new RuntimeException("Card does not belong to user");
        }

        repository.delete(card);
    }

    private UserCardResponse toResponse(UserCard card) {
        return UserCardResponse.builder()
                .id(card.getId())
                .userId(card.getUserId())
                .cardHolderName(card.getCardHolderName())
                .cardNumber(maskCardNumber(card.getCardNumber()))
                .expireMonth(card.getExpireMonth())
                .expireYear(card.getExpireYear())
                .build();
    }

    private String maskCardNumber(String cardNumber) {
        if (cardNumber == null || cardNumber.length() < 4) {
            return cardNumber;
        }

        String lastFour = cardNumber.substring(cardNumber.length() - 4);
        return "**** **** **** " + lastFour;
    }
}
