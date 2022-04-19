function telephoneCheck(str) {
  let case1 = /^[0-9]{3}[-][0-9]{3}[-][0-9]{4}$/;
  let case2 = /^[(][0-9]{3}[)][0-9]{3}[-][0-9]{4}$/;
  let case3 = /^[(][0-9]{3}[)][\s][0-9]{3}[-][0-9]{4}$/;
  let case4 = /^[0-9]{3}[\s][0-9]{3}[\s][0-9]{4}$/;
  let case5 = /^[0-9]{10}$/;
  let case6 = /^[1]{1}[\s][0-9]{3}[\s][0-9]{3}[\s][0-9]{4}$/;
  let case7 = /^[1]{1}[\s][0-9]{3}[-][0-9]{3}[-][0-9]{4}$/;
  let case8 = /^[1]{1}[\s][(][0-9]{3}[)][\s][0-9]{3}[-][0-9]{4}$/;
  let case9 = /^[1]{1}[(][0-9]{3}[)][0-9]{3}[-][0-9]{4}$/;

  switch (true) {
    case str.match(case1) !== null:
      return true;
    case str.match(case2) !== null:
      return true;
    case str.match(case3) !== null:
      return true;
    case str.match(case4) !== null:
      return true;
    case str.match(case5) !== null:
      return true;
    case str.match(case6) !== null:
      return true;
    case str.match(case7) !== null:
      return true;
    case str.match(case8) !== null:
      return true;
    case str.match(case9) !== null:
      return true;
    default:
      return false;
  }
}

telephoneCheck("555-555-5555");
