package Catalog.backend.Tag;


import lombok.RequiredArgsConstructor;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping("/tag")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173/")
public class TagController {
    private final TagService tagService;

    @GetMapping("/public/popularTags")
    public ResponseEntity<Collection<TagDtoInterface>> getPopularTags(){
        return ResponseEntity.ok(tagService.getPopularTags());
    }

}
