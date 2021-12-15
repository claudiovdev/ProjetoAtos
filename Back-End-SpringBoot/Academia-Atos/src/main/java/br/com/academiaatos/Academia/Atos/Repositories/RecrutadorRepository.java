package br.com.academiaatos.Academia.Atos.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.academiaatos.Academia.Atos.Models.Recrutador;

@Repository
public interface RecrutadorRepository extends JpaRepository<Recrutador, Long>{

	Recrutador findById(long id);
}
