package br.com.academiaatos.Academia.Atos.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.academiaatos.Academia.Atos.Models.Candidato;

@Repository
public interface CandidatoRepository extends JpaRepository<Candidato, Long>{
	
	Candidato findById(long id);

}
