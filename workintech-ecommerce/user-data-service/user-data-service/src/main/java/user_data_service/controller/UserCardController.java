package user_data_service.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import user_data_service.dto.UserCardRequest;
import user_data_service.dto.UserCardResponse;
import user_data_service.service.UserCardService;

import java.util.List;

@RestController
@RequestMapping("/api/external-users/{userId}/cards")
@RequiredArgsConstructor
public class UserCardController {

    private final UserCardService service;

    @GetMapping
    public List<UserCardResponse> getCards(@PathVariable Long userId) {
        return service.getCards(userId);
    }

    @PostMapping
    public UserCardResponse createCard(
            @PathVariable Long userId,
            @RequestBody UserCardRequest request
    ) {
        return service.createCard(userId, request);
    }

    @PutMapping("/{cardId}")
    public UserCardResponse updateCard(
            @PathVariable Long userId,
            @PathVariable Long cardId,
            @RequestBody UserCardRequest request
    ) {
        return service.updateCard(userId, cardId, request);
    }

    @DeleteMapping("/{cardId}")
    public void deleteCard(
            @PathVariable Long userId,
            @PathVariable Long cardId
    ) {
        service.deleteCard(userId, cardId);
    }
}
