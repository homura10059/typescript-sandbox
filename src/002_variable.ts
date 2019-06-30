// 新: let/const
function letFunction() {
    console.log(`巻き上げのテスト ${v}`);
    let v = "小公女";
    // 宣言より前ではエラー
    // error TS2448: Block-scoped variable 'v' used before its declaration.
}
letFunction();