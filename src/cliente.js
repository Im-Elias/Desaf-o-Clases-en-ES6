export class Cliente {
  constructor(nombre, impuesto) {
    this._nombre = nombre;
    this.impuesto = impuesto;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nueva_nombre) {
    this._nombre = nueva_nombre;
  }
  calcularImpuesto() {
    return (this.impuesto.montoBrutoAnual - this.impuesto.deducciones) * 0.21;
  }
}
