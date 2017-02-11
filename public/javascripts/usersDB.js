/**
 * Created by karlos on 11/2/2017.
 */
var users= [
    {"name":"karlos", "correo":"sky_karlos@hotmail.com"},
    {"name":"papu", "correo":"sky_papu@hotmail.com"},
    {"name":"push", "correo":"push@hotmail.com"}
];


exports.getuser= function (index) {
    return users[index];
}



exports.getall= function () {
    return users;
};

exports.create= function (nombre, correo) {
    users.push({"name":nombre, "correo":correo});
}

exports.ckecksize= function () {
    return users.length;
}

exports.delte= function (index) {
    users.splice(index,1);
    console.log('usuario borrado, usuarios restantes: '+ users.length);
}