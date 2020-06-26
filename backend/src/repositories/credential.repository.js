const Keys = container.resolve('Storage').Keys;

class CredentialRepository {
    put(credential) {
        if(!Keys[credential.key])
          throw  Error('FORBIDDEN');
        Keys[credential.key] = credential.shared_secret;
      }
}


module.exports = CredentialRepository;
