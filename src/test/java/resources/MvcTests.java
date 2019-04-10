package resources;

import com.example.SmartHiveAPI.controller.ColonyController;
import com.example.SmartHiveAPI.controller.HiveController;
import com.example.SmartHiveAPI.model.*;
import com.example.SmartHiveAPI.repositories.ColonyRepository;
import com.example.SmartHiveAPI.repositories.HiveRepository;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;


public class MvcTests {

    @InjectMocks
    private ColonyController colonyController;


    @InjectMocks
    private HiveController hiveController;

    @Mock
    private ColonyRepository colonyRepository;

    @Mock
    private HiveRepository hiveRepository;

    private MockMvc mockMvc;
    private MockMvc mockMvcHive;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);

        mockMvc = MockMvcBuilders.standaloneSetup(colonyController).build();
        mockMvcHive = MockMvcBuilders.standaloneSetup(hiveController).build();
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

    @Test
    public void testDeleteColonyWithoutHive() throws Exception {
        Colony c = new Colony();
        Colony c2 = new Colony();
        List<Colony> colonies = new ArrayList<>();
        c.setId(1L);
        c.setName("ok");
        c2.setId(2L);
        c2.setName("ok2");
        when(colonyRepository.findById(1L)).thenReturn(java.util.Optional.ofNullable(c));
        when(colonyRepository.findAll()).thenReturn(colonies);
        mockMvc.perform(delete("/api/colony/{colonyId}", "1"))
                .andExpect(status().isOk());
        verify(colonyRepository).delete(c);

    }

    @Test
    public void testColonyAddHive() throws Exception {

        Colony c = new Colony();
        Colony c2 = new Colony();
        List<Colony> colonies = new ArrayList<>();
        c.setId(1L);
        c.setName("ok");
        c2.setId(2L);
        c2.setName("ok2");
        Hive h = new Hive();

        h.setDescription("bla");
        h.setNumber(1);

        MomAttributes momA = new MomAttributes();
        momA.setMomStatus(MomStatus.MISSING);
        momA.setStatusStartingDate(new java.sql.Date(System.currentTimeMillis()));
        momA.setMarkedStatus(MarkedStatus.UNMARKED);
        momA.setIsMarkedDateMonthSet(false);
        momA.setIsBirthdayDateMonthSet(false);
        h.setMomAttributes(momA);

        c.addHive(h);
        colonies.add(c);
        when(hiveRepository.findById(1L)).thenReturn(java.util.Optional.ofNullable(h));
        when(colonyRepository.findById(1L)).thenReturn(java.util.Optional.ofNullable(c));
        when(colonyRepository.findAll()).thenReturn(colonies);
        mockMvcHive.perform(post("/api/hive/{colonyId}", "1").contentType(MediaType.APPLICATION_JSON)
                .content("{\"number\": 1, \"description\":\"bla\"}"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$[0].hives.[0].description").value("bla"));
    }



}
