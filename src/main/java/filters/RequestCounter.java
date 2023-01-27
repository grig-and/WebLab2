package filters;
import java.io.IOException;
import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.FilterConfig;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

public class RequestCounter implements Filter {
    private int requestCount = 0;

    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpSession session = ((HttpServletRequest) request).getSession();
        requestCount++;
        System.out.println("Request count: " + requestCount);
        HttpServletResponse httpResponse = (HttpServletResponse) response;
        httpResponse.addHeader("count", Integer.toString(requestCount));
        session.setAttribute("count", requestCount);
        chain.doFilter(request, response);
    }
}


