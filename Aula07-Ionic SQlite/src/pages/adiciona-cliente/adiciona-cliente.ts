import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {	ToastController }	from 'ionic-angular';

import { Cliente } from '../../modelo/cliente';
import { ClienteProvider } from '../../providers/cliente/cliente';
import { DatabaseProvider } from '../../providers/database/database';
import { SQLiteObject } from '@ionic-native/sqlite';

/**
 * Generated class for the AdicionaClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adiciona-cliente',
  templateUrl: 'adiciona-cliente.html',
})
export class AdicionaClientePage {
  public cliente:	Cliente;
  constructor(public navCtrl: NavController, public navParams: NavParams, public clienteProvider:ClienteProvider, public dbProvider:DatabaseProvider, private toastCtrl:ToastController) {
    this.cliente =	new Cliente();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionaClientePage');
  }
  cadastraCliente()	{
    this.clienteProvider.inserir(this.cliente);
    this.exibirToast ("Cliente	cadastrado	com	sucesso.");
    this.navCtrl.pop();
    }
  
  exibirToast (dados){
    let t =	this.toastCtrl.create ({
    message: dados,
    duration: 3000,
    position: "top"
    });
    t.present();
  }
 
}
