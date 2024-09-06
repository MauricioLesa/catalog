package Catalog.backend.Tag;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TagService {

    private final TagRepository repository;

    public ArrayList<Tag> findOrSaveTags(ArrayList<String> names){

        ArrayList<Tag> tagList = new ArrayList<Tag>();

        for(String name:names){
            Tag tag;
            Optional<Tag> opTag = repository.findByName(name);

            if(opTag.isEmpty()){
                tag = Tag.builder().name(name).build();
                tag = repository.save(tag);
            }
            else{
                tag = opTag.get();
            }
            tagList.add(tag);
        }
        return tagList;
    }
}
