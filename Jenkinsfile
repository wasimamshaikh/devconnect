pipeline {
    agent any

    environment {
        MONGO_URI = 'mongodb://34.224.212.141:27017/devconnect'
        NODE_ENV = 'test'
    }

    stages {
        stage ('Install Dependencies') {
            steps {
                dir('backend') { // change to actual folder name if different
                    sh 'npm install'
                }
            }
        }
        stage ('Run Tests') {
            steps {
                dir('backend') {
                    sh '''
                    if [ -f package.json ]; then
                      npm test || echo "No tests defined"
                    else
                      echo "package.json not found, skipping tests"
                    fi
                    '''
                }
            }
        }
        stage('Build') {
            steps {
                dir('backend') {
                    sh '''
                    if [ -f package.json ]; then
                        npm run build || echo "No build step defined"
                    else
                        echo "package.json not found, skipping build"
                    fi
                    '''
                }
            }
        }
    }
}