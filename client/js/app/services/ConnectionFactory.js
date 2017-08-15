var ConnectionFactory = (function() {

    var stores     = ['negociacoes'];
    var dbName     = 'aluraframe';
    var dbVersion  = 4;
    var connection = null;
    var close      = null;

    return class ConnectionFactory {
        
        constructor() {
            throw new Error('Não é possível instanciar a class estática.');
        }
        
        static getConnection() {
            
            return new Promise((resolve, reject) => {
                
                let openRequest = window.indexedDB.open(dbName, dbVersion);
                
                openRequest.onupgradeneeded = e => ConnectionFactory._createStore(e.target.result);
                
                openRequest.onsuccess = e => {
                    
                    if (!connection) {
                        connection = e.target.result;
                        close = connection.close.bind(connection);
                        connection.close = () => {
                            throw new Error('Você não pode fechar essa conexão diretamente');
                        }
                    }
                    
                    resolve(connection);
                };
                
                openRequest.onerror = e => {
                    console.log(e.target.error);
                    reject(e.target.error.name);
                };  
            });
        }
        
        /**
        * Cria as Stores
        * @param connection Conexão com o IndexDB
        */
        static _createStore(connection) {
            if (connection.objectStoreNames.contains('negociacoes')) {
                connection.deleteObjectStore('negociacoes');
            }
            
            let optionsCreate = {
                autoIncrement: true
            }
            
            connection.createObjectStore('negociacoes', optionsCreate);
        }

        static _closeConnection() {
            close();
            connection = null;   
        }
    }
})();