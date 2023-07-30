let MY_ARRAY = [];
let newArray = []; // sau khi add số thực - bài 9
function addElement() {
  let newElem = document.getElementById("create-element").value.trim() * 1;
  if (newElem > 0) {
    MY_ARRAY.push(newElem);
    newArray = [...MY_ARRAY];
    document.getElementById("result").innerText = MY_ARRAY.join(", ");
    document.getElementById("create-element").value = "";
    document.getElementById("create-element").focus();
    tinhTatCa();
  }
}

function addRandomElement() {
  let random = Math.floor(Math.random() * 100);
  let ratio = Math.random();
  if (ratio < 0.5) {
    random = -random;
  }

  MY_ARRAY.push(random);
  newArray = [...MY_ARRAY];
  document.getElementById("result").innerText = MY_ARRAY.join(", ");
  document.getElementById("create-element").value = "";
  document.getElementById("create-element").focus();
  tinhTatCa();
}

function clearElement() {
  MY_ARRAY = [];
  newArray = [];
  document.getElementById("result").innerText = MY_ARRAY.join(", ");
  document.getElementById("create-element").value = "";
}

function ghiDapAn(bai, dapAn) {
  document.querySelector(`#b${bai} .card-body`).innerHTML = dapAn;
}

let collapse = true;
function toggleCollapse() {
  document.querySelectorAll(".collapse").forEach((e) => {
    e.classList = collapse ? "collapse" : "collapse show";
  });
  collapse = !collapse;
}

// Demo area - For testing only
// runDemo();
function runDemo() {
  MY_ARRAY = [1, 23, 2, 3, 4, 5, -1, -2, -3, -4, -5];
  document.getElementById("result").innerText = MY_ARRAY.join(", ");
  document.querySelectorAll(".collapse").forEach((e) => {
    e.classList = "collapse show";
  });
  document.getElementById("b6-vi-tri-1").value = 3;
  document.getElementById("b6-vi-tri-2").value = 5;
  tinhTatCa();
}

function tinhTatCa() {
  tinhBai1();
  tinhBai2();
  tinhBai3();
  tinhBai4();
  tinhBai5();
  tinhBai6();
  tinhBai7();
  tinhBai8();
  //   tinhBai9();
  tinhBai10();
}

/**
 * Bài 1: Tổng số dương
 *
 * input: MY_ARRAY
 * output: tổng các số dương có trong mảng
 */
function tinhBai1() {
  // let tong = 0;
  // for (var i in MY_ARRAY) {
  //   tong += MY_ARRAY[i] > 0 ? MY_ARRAY[i] : 0;
  // }
  let tong = MY_ARRAY.reduce(
    (prev, current) => (current > 0 ? prev + current : prev),
    0
  );
  ghiDapAn(1, `Tổng số dương = ${tong}`);
}

/**
 * Bài 2: Đếm số dương
 *
 * input: MY_ARRAY
 * output: đếm các số dương có trong mảng
 */
function tinhBai2() {
  // let tong = 0;
  // for (var i in MY_ARRAY) {
  //   tong += MY_ARRAY[i] > 0 ? 1 : 0;
  // }
  let tong = MY_ARRAY.reduce(
    (prev, current) => (current > 0 ? ++prev : prev),
    0
  );
  ghiDapAn(2, `Số lượng các số dương = ${tong}`);
}

/**
 * Bài 3: Tìm số nhỏ nhất
 *
 * input: MY_ARRAY
 * output: số nhỏ nhất
 */
function tinhBai3() {
  const sort = [...MY_ARRAY].sort((a, b) => a - b);
  ghiDapAn(3, `Số nhỏ nhất: ${sort[0]}`);
}

/**
 * Bài 4: Tìm số dương nhỏ nhất
 *
 * input: MY_ARRAY
 * output: số dương nhỏ nhất
 */
function tinhBai4() {
  const filterPositive = MY_ARRAY.filter((e) => e > 0);
  const sort = filterPositive.sort((a, b) => a - b);
  ghiDapAn(4, `Số dương nhỏ nhất: ${sort[0]}`);
}

/**
 * Bài 5: Tìm số chẵn cuối cùng
 *
 * input: MY_ARRAY
 * output: số chẵn cuối cùng
 */
function tinhBai5() {
  const filterEven = MY_ARRAY.filter((e) => e % 2 == 0);
  const result = filterEven.length > 0 ? filterEven[filterEven.length - 1] : -1;
  ghiDapAn(5, `Số chẵn cuối cùng: ${result}`);
}

/**
 * Bài 6: Đổi chỗ
 *
 * input: MY_ARRAY, vị trí 1, vị trí 2
 * process: splice
 * output: MY_ARRAY mới sau khi đảo vị trí 1 <-> 2
 */
function tinhBai6() {
  const viTri1 = document.getElementById("b6-vi-tri-1").value * 1;
  const viTri2 = document.getElementById("b6-vi-tri-2").value * 1;
  const new_MY_ARRAY = [...MY_ARRAY];
  const char1 = new_MY_ARRAY[viTri1];
  const char2 = new_MY_ARRAY[viTri2];
  new_MY_ARRAY[viTri1] = char2;
  new_MY_ARRAY[viTri2] = char1;
  document.getElementById("b6-result").innerText =
    "Mảng sau khi đổi chỗ: " +
    new_MY_ARRAY.join(", ") +
    " (Dãy số này sẽ không thay đổi dãy số thực tế, mỗi lần đổi sẽ so sánh với dãy số nhập ban đầu)";
}

/**
 * Bài 7: Sắp xếp mảng tăng dần
 *
 * input: MY_ARRAY
 * output: mảng tăng dần
 */
function tinhBai7() {
  const sort = [...MY_ARRAY].sort((a, b) => a - b);
  ghiDapAn(7, `Mảng sau khi sắp xếp: ${sort.join(", ")}`);
}

/**
 * Bài 8: Số nguyên tố đầu tiên
 *
 * input: MY_ARRAY
 * output: mảng tăng dần
 */
function kiemTraSoNguyenTo(number) {
  if (
    number < 2 ||
    Number.isInteger(number) == false || // ko phải số nguyên
    (number > 2 && number % 2 == 0) // là số chẵn >2
  ) {
    return false;
  } else if (number == 2) {
    return true;
  } else {
    for (var i = 3; i < number; i += 2) {
      if (number % i == 0) {
        return false;
      }
    }
    return true;
  }
}
function tinhBai8() {
  let soNguyenTo = 0;
  for (let i = 0; i < MY_ARRAY.length; i++) {
    const e = MY_ARRAY[i];
    if (kiemTraSoNguyenTo(e)) {
      soNguyenTo = e;
      break;
    }
  }
  ghiDapAn(8, `Số nguyên tố đầu tiên: ${soNguyenTo > 0 ? soNguyenTo : -1}`);
}

/**
 * Bài 9: Đếm số nguyên
 *
 * input: MY_ARRAY, dãy số mới gồm các số thực
 * process: isInterger()
 * output: số lượng các số nguyên (âm/dương)
 */

function addNewElements() {
  let newElem = document.getElementById("b9-so-thuc").value * 1;
  if (newElem !== "") {
    newArray.push(newElem);
    document.getElementById("b9-new-array").innerText = newArray.join(", ");
    document.getElementById("b9-so-thuc").value = "";
    document.getElementById("b9-so-thuc").focus();
  }
}
function tinhBai9() {
  console.log(newArray);
  let filterInterger = newArray.filter((e) => Number.isInteger(e));
  document.querySelectorAll("#b9 .card-body p")[1].style.display = "block";
  document.getElementById("b9-result").innerText = filterInterger.length;
}

/**
 * Bài 10: So sánh số lượng số dương và số lượng số âm
 *
 * input: MY_ARRAY
 * output: số dương <=> số âm
 */
function tinhBai10() {
  let duong = MY_ARRAY.filter((e) => e > 0).length;
  let am = MY_ARRAY.filter((e) => e < 0).length;
  let soSanh = "=";
  if (duong > am) {
    soSanh = ">";
  } else if (duong < am) {
    soSanh = "<";
  }
  ghiDapAn(10, `Số dương ${soSanh} Số âm`);
}
