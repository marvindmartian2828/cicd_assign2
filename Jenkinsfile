pipeline {
  agent any

    environment {
        NETLIFY_SITE_ID = '89d78d7f-8559-4937-bbde-bc710c2c8d7f'
        NETLIFY_AUTH_TOKEN = credentials('assign2Token')
    }

  stages {
    stage('Build') {
      agent {
        docker {
          image 'node:22.14.0-alpine'
          reuseNode true
        }
      }
      steps {
        sh '''
          ls -la
          node --version
          npm --version
          npm install
          npm run build
          ls -la
        '''
      }
    }

    stage('Test') {
      agent {
        docker {
          image 'node:22.14.0-alpine'
          reuseNode true
        }
      }
      steps {
        sh '''
          test -f build/index.html
          npm test
        '''
      }
    }
    
    stage('Deploy') {
        agent {
            docker {
                image 'node:22.14.0-alpine'
                reuseNode true
            }
        }
        steps {
            sh '''
            npm install netlify-cli
            node_modules/.bin/netlify --version
            echo "Deploying to production. Site ID: $NETLIFY_SITE_ID"
            node_modules/.bin/netlify status
            node_modules/.bin/netlify deploy --prod --dir=build
            '''
      }
    }
  }
}
