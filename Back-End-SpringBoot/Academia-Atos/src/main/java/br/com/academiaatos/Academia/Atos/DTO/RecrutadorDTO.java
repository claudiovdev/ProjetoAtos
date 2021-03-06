package br.com.academiaatos.Academia.Atos.DTO;

import javax.persistence.Column;

import br.com.academiaatos.Academia.Atos.Models.Recrutador;

public class RecrutadorDTO {

	private Long id;
	
	private String nome;
	
	
	private String sobrenome;
	
	
	private String email;
	
	
	

	public RecrutadorDTO(Recrutador obj) {
		super();
		this.id = obj.getId();
		this.nome = obj.getNome();
		this.sobrenome = obj.getSobrenome();
		this.email = obj.getEmail();
	}


	public RecrutadorDTO() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getNome() {
		return nome;
	}


	public void setNome(String nome) {
		this.nome = nome;
	}
	
	public String getSobrenome() {
		return sobrenome;
	}


	public void setSobrenome(String sobrenome) {
		this.sobrenome = sobrenome;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}

	
	
}
