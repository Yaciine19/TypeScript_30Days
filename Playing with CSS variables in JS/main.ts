const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(".controls input");

      function handleChange(this: HTMLInputElement) {
        const suffix = this.dataset.sizing || "";

        document.documentElement.style.setProperty(
          `--${this.name}`,
          this.value + suffix
        );
      }

      inputs.forEach((input) => input.addEventListener("change", handleChange));
      inputs.forEach((input) =>
        input.addEventListener("mousemove", handleChange)
      );