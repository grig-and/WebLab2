package model;

import java.util.ArrayList;

public class Model {
    private static ArrayList<HistoryRow> history = new ArrayList<>();

    public static void addRow(HistoryRow row) {
        history.add(row);
    }

    public static ArrayList<HistoryRow> getHistory() {
        return history;
    }

    public static void clearHistory() {
        history.clear();
    }
}
