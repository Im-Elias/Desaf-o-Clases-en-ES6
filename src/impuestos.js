export class Impuesto {
  constructor(montoBrutoAnual, deducciones) {
    this._montoBrutoAnual = montoBrutoAnual;
    this._deducciones = deducciones;
  }
  get montoBrutoAnual() {
    return this._montoBrutoAnual;
  }
  set montoBrutoAnual(new_montoBrutalAnual) {
    this._montoBrutoAnual = new_montoBrutalAnual;
  }
  get deducciones() {
    return this._deducciones;
  }
  set deducciones(new_deducciones) {
    this._deducciones = new_deducciones;
  }
}
