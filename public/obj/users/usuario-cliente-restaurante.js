class UsuarioClienteRestaurante extends Cliente {
    constructor(id, nome, email, telefone) {
        super(id, nome, email);
        this.telefone = telefone;
    }
}