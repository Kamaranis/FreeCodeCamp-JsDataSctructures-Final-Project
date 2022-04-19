function checkCashRegister(price, cash, cid) {
  const valores = {
    "ONE HUNDRED": 10000,
    TWENTY: 2000,
    TEN: 1000,
    FIVE: 500,
    ONE: 100,
    QUARTER: 25,
    DIME: 10,
    NICKEL: 5,
    PENNY: 1,
  };
  let aDevolver = cash * 100 - price * 100;
  console.log(aDevolver);
  let respuesta = {
    status: null,
    change: [],
  };
  for (let ofrece = cid.length - 1; ofrece >= 0; ofrece--) {
    let pago = cid[ofrece];
    let cantidad = 0;
    let billetesDispo = pago[1] * 100;
    while (aDevolver >= valores[pago[0]] && billetesDispo >= valores[pago[0]]) {
      billetesDispo -= valores[pago[0]];
      aDevolver -= valores[pago[0]];
      cantidad += valores[pago[0]];
    }
    switch (billetesDispo == 0) {
      case true:
        respuesta.status = "CLOSED";
        break;
      case false:
        respuesta.status = "OPEN";
    }

    switch (cantidad > 0) {
      case true:
        respuesta.change.push([pago[0], cantidad / 100]);
        break;
    }
  }
  while (aDevolver > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  switch (respuesta.status == "CLOSED") {
    case true:
      respuesta.change = cid;
      break;
  }
  return respuesta;
}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
