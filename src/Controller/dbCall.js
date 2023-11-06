//Control que invoca a la API desde la web

const dbserver = `http://localhost:7000`

class dbCall {
    //Validar autenticacion de usuario
    static async validateUser(user, password) {
        const params = new URLSearchParams()
        params.append('user', user)
        params.append('password', password)
        return await fetch(`${dbserver}/validateUser`, {
            method: 'POST',
            body: params,
        }).then((res) => res.json()) //{"msg": "Ingreso satisfactorio!", data: isUser}
    }
    
    //Recupera todos los personajes genericos(skins)
    static async getCharacters(limit){
        return await fetch(`${dbserver}/characters/${limit}`, {
            method: 'GET',
        }).then((res) => res.json())
    }

    //Recupera los trajes/items posibles de equipar
    static async getEquipments(limit) {
        return await fetch(`${dbserver}/equipments/${limit}`, {
            method: 'GET',
        }).then((res) => res.json())
    }

    //Recupera los trajes/items posibles de equipar por categoria
    static async getEquipmentsByCatgory(limit, category) {
        return await fetch(`${dbserver}/equipmentsByCategory/${limit}/${category}`, {
            method: 'GET',
        }).then((res) => res.json())
    }
    
    //Crea un personaje personalizado por un usuario
    static async addCustomCharacter(customCharacter){
        const params = new URLSearchParams()
        params.append('name', customCharacter.name)
        params.append('type', customCharacter.type)
        params.append('gender', customCharacter.gender)
        params.append('age', customCharacter.age)
        params.append('image', customCharacter.image)
        params.append('item1', customCharacter.item1.item)
        params.append('category1', customCharacter.item1.category)
        params.append('color1', customCharacter.item1.color)
        params.append('accesories1', customCharacter.item1.accesories)
        params.append('traits1', customCharacter.item1.traits)
        params.append('image1', customCharacter.item1.image)
        params.append('item2', customCharacter.item2.item)
        params.append('category2', customCharacter.item2.category)
        params.append('color2', customCharacter.item2.color)
        params.append('image2', customCharacter.item2.image)
        params.append('item3', customCharacter.item3.item)
        params.append('category3', customCharacter.item3.category)
        params.append('color3', customCharacter.item3.color)
        params.append('image3', customCharacter.item3.image)
        params.append('username', customCharacter.username)
        return await fetch(`${dbserver}/customCharacter`, {
            method: 'POST',
            body: params,
        }).then((res) => res.json())
    }

    //Recupera los personajes personalizados por los usuarios
    static async getCustomCharacters(limit) {
        return await fetch(`${dbserver}/customCharacters/${limit}`, {
            method: 'GET',
        }).then((res) => res.json())
    }

    static async deleteCustomCharacters(name) {
        const params = new URLSearchParams()
        params.append('name', name)
        return await fetch(`${dbserver}/customCharacter/`, {
            method: 'DELETE',
            body: params,
        }).then((res) => res.json())
    }

    //Recupera los personajes personalizados de un usuario
    static async getCustomCharactersByUser(limit, user) {
        return await fetch(`${dbserver}/customCharacterByUser/${limit}/${user}`, {
            method: 'GET',
        }).then((res) => res.json())
    }
}

module.exports = dbCall