package model;

public class HistoryRow {
    private double x;
    private double y;
    private double r;
    private String currentTime;
    private double executionTime;
    private boolean hit;

    public HistoryRow(double x, double y, double r, String currentTime, double executionTime, boolean hit) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.currentTime = currentTime;
        this.executionTime = executionTime;
        this.hit = hit;
    }

    public double getX() {
        return x;
    }


    public double getY() {
        return y;
    }

    public double getR() {
        return r;
    }

    public String getCurrentTime() {
        return currentTime;
    }

    public double getExecutionTime() {
        return executionTime;
    }

    public boolean isHit() {
        return hit;
    }

    @Override
    public String toString() {
        return "<tr class='row' value='" + (hit ? "true" : "false") + "'>" +
                "<td>" + x + "</td>" +
                "<td>" + String.format("%.3f", y).replace(",", ".") + "</td>" +
                "<td>" + r + "</td>" +
                "<td>" + currentTime + "</td>" +
                "<td>" + executionTime + "</td>" +
                "<td>" + (hit ? "true" : "false") + "</td>" +
                "</tr>";
    }
}
