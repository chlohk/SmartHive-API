package resources;

import com.example.SmartHiveAPI.controller.ColonyController;
import com.example.SmartHiveAPI.model.Colony;
import com.example.SmartHiveAPI.model.Hive;
import com.example.SmartHiveAPI.repositories.ColonyRepository;
import org.junit.Before;
import org.junit.Test;
import org.mockito.*;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;


public class MvcTests {

    @InjectMocks
    private ColonyController colonyController;

    @Mock
    private ColonyRepository colonyRepository;

    private MockMvc mockMvc;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);

        mockMvc = MockMvcBuilders.standaloneSetup(colonyController).build();
    }

    @Test
    public void testSelectingOneColonyById() throws Exception {
        Colony c = new Colony();
        List<Colony> colonies = new ArrayList<>();
        Hive h = new Hive();
        h.setId(1L);
        h.setDescription("dsc");
        h.setNumber(1);
        c.setId(1L);
        c.setName("ok");
        when(colonyRepository.findById(1L)).thenReturn(java.util.Optional.ofNullable(c));
        //when(colonyRepository.save(any(Colony.class))).thenAnswer(i -> colonies.add((Colony) i.getArguments()[0]));
        colonies.add(c);
        when(colonyRepository.findAll()).thenReturn(colonies);

        mockMvc.perform(get("/api/colony/{colonyId}", "1"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.name").value("ok"));
    }

    @Test
    public void testAddingNewColonies() throws Exception {
        Colony c = new Colony();
        List<Colony> colonies = new ArrayList<>();
        Hive h = new Hive();
        h.setId(1L);
        h.setDescription("dsc");
        h.setNumber(1);
        c.setId(1L);
        c.setName("ok");
        when(colonyRepository.findById(1L)).thenReturn(java.util.Optional.ofNullable(c));
        //when(colonyRepository.save(any(Colony.class))).thenAnswer(i -> colonies.add((Colony) i.getArguments()[0]));
        colonies.add(c);
        when(colonyRepository.findAll()).thenReturn(colonies);

        mockMvc.perform(post("/api/colony/").contentType(MediaType.APPLICATION_JSON)
                .content("{\"name\": \"he\", \"description\":\"bla\"}"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$[0].name").value("ok"));
    }


    @Test
    public void testUpdatecolony() throws Exception {
        Colony c = new Colony();
        List<Colony> colonies = new ArrayList<>();
        Hive h = new Hive();
        h.setId(1L);
        h.setDescription("dsc");
        h.setNumber(1);
        c.setId(1L);
        c.setName("ok");

        when(colonyRepository.findById(1L)).thenReturn(java.util.Optional.ofNullable(c));
        //when(colonyRepository.save(any(Colony.class))).thenAnswer(i -> colonies.add((Colony) i.getArguments()[0]));
        when(colonyRepository.findAll()).thenReturn(colonies);
        c.setName("he");
        colonies.add(c);
        mockMvc.perform(put("/api/colony/{colonyId}", "1").contentType(MediaType.APPLICATION_JSON)
                .content("{\"name\": \"he\"}"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$[0].name").value("he"));
    }

    @Test
    public void testDeleteColonyWithHives() throws Exception {
        Colony c = new Colony();
        Colony c2 = new Colony();
        List<Colony> colonies = new ArrayList<>();
        Hive h = new Hive();
        h.setId(1L);
        h.setDescription("dsc");
        h.setNumber(1);
        c.setId(1L);
        c.setName("ok");
        c.addHive(h);
        colonies.add(c);
        when(colonyRepository.findById(1L)).thenReturn(java.util.Optional.ofNullable(c));
        when(colonyRepository.findAll()).thenReturn(colonies);


        mockMvc.perform(delete("/api/colony/{colonyId}", "1"))
                .andExpect(status().isMethodNotAllowed());
    }


}
