const Empleado = require("../models/empleados.model");

let response = {
    msg:"",
    exito:false
}

exports.create = function(req, res){
    let empleado = new Empleado({
        nombre:req.body.nombre,
        apellido_p:req.body.apellido_p,
        apellido_m:req.body.apellido_m,
        telefono:req.body.telefono,
        email:req.body.email,
        direccion:req.body.direccion,
        
    })

    empleado.save(function(err) {
        if(err){
            console.log =false,
            response.exito =false,
            response.msg ="error al guardar el empleado"
            res.json(response)
            return;
        }
        response.exito =true,
        response.msg ="el empleado se guardó correctamente"
        res.json(response)
    })
}
    