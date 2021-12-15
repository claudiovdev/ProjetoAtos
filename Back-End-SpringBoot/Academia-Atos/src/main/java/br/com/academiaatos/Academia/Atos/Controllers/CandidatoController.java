package br.com.academiaatos.Academia.Atos.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.academiaatos.Academia.Atos.Models.Candidato;
import br.com.academiaatos.Academia.Atos.Repositories.CandidatoRepository;
import io.swagger.annotations.ApiOperation;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class CandidatoController {

	@Autowired
	CandidatoRepository candidatoRepository;
	
	@ApiOperation(value= "Retorna uma lista de candidatos")
	@GetMapping("/candidatos")
	public List<Candidato> buscarCandidatos(){
		return candidatoRepository.findAll();
	}
	
	@ApiOperation(value= "Retorna um unico candidato")
	@GetMapping("/candidato/{id}")
	public Candidato buscarCandidatoPorId(@PathVariable(value = "id") long id) {
		return candidatoRepository.findById(id);
	}
	
	@ApiOperation(value= "Cria um novo candidato")
	@PostMapping("/candidato")
	public Candidato criarCandidato(@RequestBody Candidato candidato) {
		return candidatoRepository.save(candidato);
	}
	
	@ApiOperation(value= "Deleta um candidato")
	@DeleteMapping("/candidato/{id}")
	public void deletarCandidato(@PathVariable Long id) {
		candidatoRepository.deleteById(id);
	}
	
	@ApiOperation(value= "Atualiza um candidato")
	@PutMapping("/candidato/{id}")
	public Candidato atualizarCandidato(@RequestBody Candidato candidatoNovo, @PathVariable Long id) {
		return candidatoRepository.findById(id).map(candidatoAntigo -> {
			candidatoAntigo.setNome(candidatoNovo.getNome());
			candidatoAntigo.setSobreNome(candidatoNovo.getSobreNome());
			candidatoAntigo.setEmail(candidatoNovo.getEmail());
			candidatoAntigo.setRecrutador(candidatoNovo.getRecrutador());
			Candidato update = candidatoRepository.save(candidatoAntigo);
			return update;
		}).orElse(null);
	}
}
