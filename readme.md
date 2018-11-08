#### Instale
sudo apt-get update
sudo apt-get install software-properties-common
sudo apt-add-repository ppa:ansible/ansible
sudo apt-get update
sudo apt-get install ansible

sudo apt-get install python-pip python-dev build-essential
sudo pip install --upgrade pip

mkdir projeto
cd projeto
git clone http://projeto
npm init
npm install express --save
npm install express

```
Módulos do Node instalados com a opção --save são incluídas na lista dependencies no arquivo package.json. Posteriormente, executando npm install no diretório app irá automaticamente instalar os módulos na lista de dependências.
```

docker build -f Dockerfile_alp -t alp_node .
docker run -i -t alp_node

<!-- NGINX Balanceador
round-robin: las peticiones son distribuidas entre los servidores de forma cíclica. Cabe la posibilidad de que las peticiones más pesadas sean procesadas por el mismo servidor, distribuye las peticiones de forma ecuánime pero la carga no.

least-connected: la siguiente petición es atendida por el servidor con menos conexiones activas.

ip-hash: se selecciona el servidor que atenderá la petición en base a algún dato como la dirección IP, de esta forma todas las peticiones de un usuario son atendidas por el mismo servidor.
 -->
#### Referencias
https://docs.ansible.com/ansible/2.6/modules/docker_image_module.html
https://github.com/nodesource/distributions/blob/master/README.md
http://expressjs.com/pt-br/starter/installing.html
https://puppet.com/docs/pipelines-for-apps/free/docker-nodejs.html#before-you-begin
https://picodotdev.github.io/blog-bitix/2016/07/configurar-nginx-como-balanceador-de-carga/