# openpgp-wkd-keys

This repository contains my OpenPGP key information, published via Web Key Directory (WKD). You can use this information
to send me encrypted messages, verify my signed messages, or authenticate my identity.

## My PGP key information

**Fingerprint:** `1BBD C23D 1853 255D 6415 D2EC 814E DF85 1AAB 370E`

## How to import my key

You can import my key using GnuPG via WKD with:

```sh
gpg --locate-keys one-of-my-email@addresses.com
```

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

## FAQ

### About Web Key Directory (WKD)

A Web Key Directory (WKD) is a standardised way to publish and discover OpenPGP keys on websites, enabling GnuPG and
other compatible tools to automatically find and download public keys. This repository is structured according to the
WKD specification.

### What's PGP?

PGP (Pretty Good Privacy) is an encryption program that provides cryptographic privacy and authentication for data
communication. It uses a combination of symmetric-key cryptography and public-key cryptography. PGP is used for signing,
encrypting and decrypting texts, e-mails, files, directories, and whole disk partitions.

### Why should I use PGP?

PGP provides end-to-end encryption, ensuring that only the intended recipient can read the message. It also provides
authentication, allowing the recipient to verify the sender's identity. PGP is widely used for secure communication,
software distribution, and software signing.

### How can I use PGP?

You can use PGP by installing compatible software, such as GnuPG, and generating a key pair. You can then share your
public key with others, allowing them to send you encrypted messages or verify your signed messages.

### But don't you have other PGP keys?

Yes, I do. In fact, I'm signing commits in this repository with a different development key. You can download it as well
as my main key from a single asc file [here](aaccioly.asc).

If a key is not available via WKD, you can assume that I don't want to share it publicly. It may be a software signing
key, a key for a specific project, an identity I'm phasing out, or a key I use for personal communication. If you need a
specific key, please contact me directly.

### Do you have a Keybase account?

Yes, I do! You can also verify [my identity](https://keybase.io/aaccioly) on [Keybase](https://keybase.io) and retrieve
my PGP key from there:

```sh
keybase follow aaccioly
keybase pgp pull aaccioly
```
### How about Keyoxide?

Yes, I also have a [Keyoxide](https://keyoxide.org) profile. Since you know my PGP key fingerprint, it's easy to find my
profile there. Just search for `1BBD C23D 1853 255D 6415 D2EC 814E DF85 1AAB 370E`.

### How about a public key server?

My PGP key is also available at https://keys.openpgp.org/ and other public key servers. You can use the following
command to retrieve my key:

```sh
gpg --keyserver hkps://keys.openpgp.org --recv-keys 1BBDC23D1853255D6415D2EC814EDF851AAB370E
```

## Additional resources

- [GnuPG WKD documentation](https://wiki.gnupg.org/WKD)
- [GnuPG Hosting a Web Key Directory](https://wiki.gnupg.org/WKDHosting)
- [Keybase documentation](https://book.keybase.io/docs)
- [OpenPGP Web Key Directory specification](https://datatracker.ietf.org/doc/html/draft-koch-openpgp-webkey-service)
- [Tim Hårek Andreassen Blog Getting started with GPG](https://timharek.no/blog/getting-started-gpg/)
