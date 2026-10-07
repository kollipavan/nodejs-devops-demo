pipeline {
    agent any

//    environment {
//        EC2_HOST = "YOUR-EC2-PUBLIC-IP"
//        EC2_USER = "ec2-user"
//   }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                echo 'Build Success'
            }
        }

  //      stage('Deploy') {
  //          steps {
  //              sh '''
  //             scp -o StrictHostKeyChecking=no \
  //              app.js package.json \
  //              ${EC2_USER}@${EC2_HOST}:/home/ec2-user/

  //              ssh -o StrictHostKeyChecking=no \
  //              ${EC2_USER}@${EC2_HOST} "
  //                  cd /home/ec2-user
  //                  npm install
  //                  pkill node || true
   //                 nohup node app.js > app.log 2>&1 &
   //             "
   //             '''
   //         }
   //     }

        stage('Validate') {
            steps {
                sh '''
                curl http://${EC2_HOST}:3000
                '''
            }
        }
    }
}
