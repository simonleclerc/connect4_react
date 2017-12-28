Docker
======
Lancer docker:

    docker-compose up -d

Entrer dans le bash du container

    dockerdocker exec -i -t connect_app_1 /bin/bash
    
Lancer le build (watch mode), à éxécuter dans le container

    npm run build:w