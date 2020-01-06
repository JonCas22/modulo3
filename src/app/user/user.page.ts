import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {


  user1:User = new User("Jon", "joncas@gmail.com", "1234");
  user2:User = new User("Olek", "okel@gmail.com", "4567");
  user3:User = new User("Cris", "cristian@gmail.com", "8910");
  user4:User = new User("Tobi", "tobi1@gmail.com", "1112");
  
  users:User[]=[this.user1, this.user2, this.user3, this.user4];

  constructor(public alertController: AlertController) {}

  ngOnInit() {
  }

  getUsers(){
    return this.users;
  }

  onClick(name){
    alert("has pulsado el usuario =>" + name);
  }

  async delete(index){
    let alert = await this.alertController.create({
      header: 'Estas seguro?',
      message: 'Pulsa aceptar si deseas eliminar el usuario',
      buttons: [{ text: 'Cancel', role: 'cancel' },
                { text: 'Aceptar', handler: ()=>{
                  this.users.splice(index, 1);
                }
                }
               ]
  });
  await alert.present();
  }

  async updateTask(index) {
    let alert = await this.alertController.create({
        header: 'Update Task?',
        message: 'Type in your new task to update.',
        inputs: [{ name: 'nombre', value: this.users[index].nombre,  placeholder: 'Nombre'}, {name:'email', value: this.users[index].email, placeholder: 'Email'},
         {name:'contraseña', value: this.users[index].contraseña,  placeholder: 'Contraseña'}],
        buttons: [{ text: 'Cancel', role: 'cancel' },
                  { text: 'Update', handler:  data => {
                      this.users[index].nombre = data.nombre; this.users[index].email = data.email; this.users[index].contraseña = data.contraseña; }
                  }
                 ]
    });
    await alert.present();
}

}
