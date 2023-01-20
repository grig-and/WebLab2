<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <title>Lab_1</title>

    <style>
        <%@include file="style.css" %>
    </style>
</head>

<body>
<h1 class="header">Григорьев Андрей Сергеевич P32111 111101</h1>
<div>
    <div class="img_and_controls">
        <div class="canvas">
            <canvas id="canvas" width="220" height="220"></canvas>
        </div>
        <div class="controls">
            <div class="control_el">
                <label id="x_label" for="x">X:</label>
                <div>
                    <select id="x">
                        <option value="-4">-4</option>
                        <option value="-3">-3</option>
                        <option value="-2">-2</option>
                        <option value="-1">-1</option>
                        <option value="0" selected>0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
            </div>

            <div class="control_el">
                <label id="y_label" for="y">Y:</label>
                <div>
                    <input type="text" id="y" placeholder="(-3...3)">
                </div>
            </div>
            <div class="control_el">
                <label id="r_label">R:</label>
                <div>
                    <button type="button" class="btn_r" value="1" onclick="setR(this.value)">1</button>
                    <button type="button" class="btn_r" value="2" onclick="setR(this.value)">2</button>
                    <button type="button" class="btn_r" value="3" onclick="setR(this.value)">3</button>
                    <button type="button" class="btn_r" value="4" onclick="setR(this.value)">4</button>
                    <button type="button" class="btn_r" value="5" onclick="setR(this.value)">5</button>
                </div>
            </div>

            <div class="action_btns">
                <button class="submit" onclick="submit()">Submit</button>
                <button class="clear" onclick="reset()">Clear table</button>
            </div>
        </div>
    </div>

    <table id="result">
        <tr class="result_header">
            <th>X</th>
            <th>Y</th>
            <th>R</th>
            <th>Current time</th>
            <th>Execution time</th>
            <th>Hit</th>
        </tr>
<%= %>
        <%@ page import="model.Model" %>
        <%@ page import="model.HistoryRow" %>
        <% for (int i = 0; i < Model.getHistory().size(); i++) { %>
        <% HistoryRow row = Model.getHistory().get(i); %>
        <% out.println(row.toString()); %>
        <% } %>
    </table>
</div>

<script>
    <%@include file="script.js" %>
</script>
</body>

</html>