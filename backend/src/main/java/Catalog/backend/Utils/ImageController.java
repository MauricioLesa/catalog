package Catalog.backend.Utils;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/image")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173/")
public class ImageController {

    private final ImageService service;

    @PostMapping("/save")
    public ResponseEntity<SaveImageResponse> saveNewImage(
            @RequestParam("image") MultipartFile image
    ) throws IOException {

        String uploadDirectory = "src/main/resources/static/images";
        String path =  service.saveImage(uploadDirectory,image);

        return ResponseEntity.ok(SaveImageResponse.builder().img_path(path).build());
    }

    @GetMapping("/load/{imageName}")
    public ResponseEntity<LoadImageResponse> loadImage(
            @PathVariable(value="imageName") String name
    ) throws IOException {

        String uploadDirectory = "src/main/resources/static/images";
        byte[] image =  service.getImage(uploadDirectory,name);

        return ResponseEntity.ok(LoadImageResponse.builder().image(image).build());
    }
}
