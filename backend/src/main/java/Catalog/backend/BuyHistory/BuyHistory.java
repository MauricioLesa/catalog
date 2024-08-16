package Catalog.backend.BuyHistory;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "buy_history")
public class BuyHistory {

    @EmbeddedId
    private BuyHistoryPrimaryKey buyHistoryPrimaryKey;

    private Date date;

    private Float price;


}
