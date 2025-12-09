{
  description = "snare.dev :: Varun's personal website";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
  };

  outputs = inputs @ {flake-parts, ...}:
    flake-parts.lib.mkFlake {inherit inputs;} {
      systems = inputs.nixpkgs.lib.systems.flakeExposed;

      perSystem = {pkgs, ...}: {
        devShells.default = pkgs.mkShell {
          name = "snare-dev-shell";
          buildInputs = with pkgs; [
            nodejs_24
          ];
        };
      };
    };
}
