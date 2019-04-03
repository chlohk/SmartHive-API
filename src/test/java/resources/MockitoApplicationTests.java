package resources;

import com.example.SmartHiveAPI.controller.ColonyController;
import com.example.SmartHiveAPI.model.Colony;
import com.example.SmartHiveAPI.repositories.ColonyRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Collections;
import java.util.Optional;

import static org.junit.Assert.assertEquals;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.mockingDetails;
import static org.mockito.Mockito.when;

@SpringBootTest
@RunWith(MockitoJUnitRunner.class)
public class MockitoApplicationTests {

    private MockMvc mvc;

    @InjectMocks
    private ColonyController colonyController;

    @Mock
    private ColonyRepository colonyRepository;

    @Before
    public void init() throws Exception {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testGetColonyById() {

        System.out.println(mockingDetails(colonyRepository).isMock());
        System.out.println("test");
        Colony newColony = new Colony();
        newColony.setId(1L);
        when(colonyRepository.findAll()).thenReturn(Collections.singletonList(newColony));
        colonyRepository.save(newColony);
        System.out.println(colonyRepository.findAll().get(0));
        assertEquals(newColony, colonyRepository.findAll().get(0));

    }
}
