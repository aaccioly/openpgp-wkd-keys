docs(readme): update documentation with key information and usage

- Document PGP key fingerprint and import methods
- Add explanation of Web Key Directory (WKD) functionality
- Describe alternative key retrieval through Keybase
- Explain repository structure and included resources
- Include security considerations and verification best practices
- Add references to relevant OpenPGP and WKD documentation# OpenPGP Web Key Directory

This repository contains my public PGP keys in a Web Key Directory-friendly structure.

## About Web Key Directory (WKD)

A Web Key Directory (WKD) is a standardized way to publish and discover OpenPGP keys on websites, enabling GnuPG and
other compatible tools to automatically find and download public keys. This repository is structured according to the
WKD specification.

## My PGP key information

**Fingerprint:** `1BBD C23D 1853 255D 6415 D2EC 814E DF85 1AAB 370E`

## How to import my key

You can import my key using GnuPG via WKD with:

```sh
gpg --locate-keys one-of-my-email@addresses.com
```

## Do you have a Keybase account?

Yes, I do! You can also verify [my identity](https://keybase.io/aaccioly) on [Keybase](https://keybase.io) and retrieve
my PGP key from there:

```sh
keybase follow aaccioly
keybase pgp pull aaccioly
```

## But don't you have other PGP keys?

Yes, I do. In fact, I'm signing commits in this repository with a different key. However, I'm only publishing my main
key via WKD. If a key is not available via WKD, you can assume that I don't want to share it publicly. It may be a
software signing key, a key for a specific project, an identity I'm phasing out, or a key I use for personal
communication. If you need a specific key, please contact me directly.

## Repository structure

This repository is structured as follows:

- `/.well-known/openpgpkey/` - Contains the WKD implementation
- `/index.html` - A human-readable page displaying my PGP key information
- `/images/` - Contains a QR code for my PGP key and other UI resources

## Security Considerations

- The WKD implementation uses HTTPS to protect against tampering in transit.
- Always verify the key fingerprint using an independent and trusted channel before importing.
- Consider using multiple verification methods (WKD, Keybase, or direct exchange such as an in-person verification or a
signed message).
- While WKD improves key distribution, it doesn't replace proper key verification.

## Additional resources

- [GnuPG WKD documentation](https://wiki.gnupg.org/WKD)
- [GnuPG Hosting a Web Key Directory](https://wiki.gnupg.org/WKDHosting)
- [Keybase documentation](https://book.keybase.io/docs)
- [OpenPGP Web Key Directory specification](https://datatracker.ietf.org/doc/html/draft-koch-openpgp-webkey-service)
