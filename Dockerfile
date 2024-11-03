FROM 10.22.21.104/iflorens-proxy/customer_outter/kylin-openresty1.21.4.2:1.0.0

COPY dist /var/www/v3/main/

COPY nginx.conf /usr/local/openresty1.21.4.2/nginx/conf/nginx.conf

RUN mkdir -p /var/log/nginx
EXPOSE 80

CMD ["/usr/local/openresty1.21.4.2/nginx/sbin/nginx","-c", "/usr/local/openresty1.21.4.2/nginx/conf/nginx.conf", "-g", "daemon off;"]

