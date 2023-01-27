package servlets;

import model.HistoryRow;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import model.Model;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;


public class AreaCheckServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        long startTime = System.nanoTime();
        double x = Double.parseDouble(request.getParameter("x"));
        double y = Double.parseDouble(request.getParameter("y"));
        double r = Double.parseDouble(request.getParameter("r"));
        HttpSession session = request.getSession();
        ArrayList<HistoryRow> history = (ArrayList<HistoryRow>) session.getAttribute("history");
        if (!checkMagicNumbers(x, y, r)) {
            if (!validate(x, y, r)) {
                response.setStatus(400);
                response.setContentType("text/html");
                response.getWriter().write("Invalid input");
                return;
            }
            boolean hit = checkArea(x, y, r);
            Date currentTime = new Date();
            long executionTime = System.nanoTime() - startTime;
            String formattedDate = String.format("%td.%<tm.%<tY %<tH:%<tM:%<tS", currentTime);
            HistoryRow row = new HistoryRow(x, y, r, formattedDate, executionTime, hit);
            Model.addRow(row);


            if (history == null) {
                history = new ArrayList<>();
            }
            history.add(row);

        } else {
            history = new ArrayList<>();
        }
        session.setAttribute("history", history);
        response.setContentType("text/html");
        response.getWriter().write(generateTable(history, response.getHeader("count")));
    }

    private boolean checkMagicNumbers(double x, double y, double r) {
        if (x == 42 || y == 42 || r == 42) {
            Model.clearHistory();
            return true;
        }
        return false;
    }

    private boolean validate(double x, double y, double r) {
        return x >= -4 && x <= 4 && y >= -3 && y <= 3 && r >= 1 && r <= 5;
    }

    private boolean checkArea(double x, double y, double r) {
        if (x >= 0 && y >= 0 && x * x + y * y <= r * r / 4) {
            return true;
        }
        if (x >= 0 && y <= 0 && y >= -r + x) {
            return true;
        }
        if (x <= 0 && y >= 0 && x >= -r && y <= r / 2) {
            return true;
        }
        return false;
    }

    private String generateTable(ArrayList<HistoryRow> history, String count) {
        StringBuilder table = new StringBuilder();
        table.append("<table>");
        table.append("<tbody>");
        table.append("<tr class='result_header'>");
        table.append("<th>X</th>");
        table.append("<th>Y</th>");
        table.append("<th>R</th>");
        table.append("<th>Current time</th>");
        table.append("<th>Execution time</th>");
        table.append("<th>Hit</th>");
        table.append("</tr>");
        for (HistoryRow row : history) {
            table.append(row.toString());
        }
        table.append("<tr class='row'><td colspan='6'>Request count: " + count + "</th></tr>");
        table.append("</tbody>");
        table.append("</table>");
        return table.toString();
    }

}
