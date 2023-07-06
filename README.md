# Amicavela-web
Website project for Amicavela, a local sailing sport association. Build with [Next.js](https://nextjs.org/) and [Material-UI](https://material-ui.com/).
## Preview
[https://amicavela.vercel.app/](https://amicavela.vercel.app/)

## Contribute
### Prerequisites

- [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Install it with wget:
```
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

or with curl:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

Check if the installation was successful:
```
command -v nvm
```
it should just return the string '`nvm`'

<b>Note</b>: `nvm` also support Windows in some cases. It should work through WSL (Windows Subsystem for Linux) depending on the version of WSL. It should also work with GitBash (MSYS) or Cygwin.

<br>
  
- [Node.js](https://nodejs.org/en/download/) (version 14 or higher)

Once nvm is installed, install the required Node.js version:
```
nvm install node
```
<br>

### Installation

1. Clone the repository:

```sh
git clone https://github.com/ettorepuccetti/amicavela-web

cd amicavela-web
```

2. Install the project dependencies:

```sh
npm install
```

<br>

### Usage

To start the development server, run:

```sh
npm run dev
```

The server will be available at http://localhost:3000.

<br>

### Building for production

To build the project for production, run:

```sh
npm run build
```

This will generate a `build` directory with the optimized production build.

To start the production server, run:

```sh
npm run start
```

The server will be available at http://localhost:3000.

<br>

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
