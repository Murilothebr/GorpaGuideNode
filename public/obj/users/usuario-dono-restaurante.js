class UsuarioDonoRestaurante extends Usuario {
    constructor(id, nome, email, restaurante) {
        super(id, nome, email);
        this.restaurante = restaurante;
    }
}