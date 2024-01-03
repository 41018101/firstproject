<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>專案網站</title>
    <style>
        /* 在這裡添加自定義的 CSS 樣式 */
    </style>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
    <script>
        $(document).ready(function () {
            // 初始狀態
            $("#student-info").css("font-size", "16px").css("color", "black");
            $("#profile-image").css("border-radius", "0").css("border", "none");

            // 功能2: 調整字體和顏色
            $("#btn-font-color").click(function () {
                $("#student-info").css("font-size", "35px").css("color", "blue");
            });

            // 功能3: 大頭照圓邊、紅色粗框
            $("#btn-profile-style").click(function () {
                $("#profile-image").css("border-radius", "50%").css("border", "5px solid red");
            });

            // 功能4: 換圖 大頭照為生活照
            $("#btn-change-image").click(function () {
              $("#profile-image").attr("src", "D:\\MyProject\\image\\lifestyle-photo.jpg");
            });
            
            // 功能5: 控制圖片的淡入、淡出
            $("#btn-fade").click(function () {
                $("#profile-image").fadeToggle(1000); // 1000 milliseconds = 1 second
            });

            // 超連結1: 顯示本題答案的原始 HTML 檔
            $("#link-html").click(function () {
                window.open("https://raw.githubusercontent.com/your-username/your-repo/main/index.html", "_blank");
            });

            // 超連結2: 顯示本題答案的原始 JS 檔
            $("#link-js").click(function () {
                window.open("https://raw.githubusercontent.com/your-username/your-repo/main/script.js", "_blank");
            });
        });
    </script>
</head>
<body>
    <div id="student-info">
        <p>學號: 41018101</p>
        <p>姓名: 尤泓喜</p>
    </div>
    <img id="profile-image" src="D:\MyProject\image\1.jpg" alt="自拍大頭照">
    <button id="btn-font-color">調整字體和顏色</button>
    <button id="btn-profile-style">大頭照圓邊、紅色粗框</button>
    <button id="D:\MyProject\image\2.jpg">換圖 大頭照為生活照</button>
    <button id="btn-fade">控制圖片的淡入、淡出</button>
    <br>
    <a href="#" id="link-html" target="_blank">超連結1: 顯示本題答案的原始 HTML 檔</a>
    <br>
    <a href="#" id="link-js" target="_blank">超連結2: 顯示本題答案的原始 JS 檔</a>
</body>
</html>
