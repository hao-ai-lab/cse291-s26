LATEXMK ?= latexmk
OUTDIR ?= build
PDF_OUT = ../../assets/scribe_notes/may19_scribe.pdf

.PHONY: all clean

all: $(PDF_OUT)

$(PDF_OUT): main.tex
	mkdir -p $(OUTDIR) ../../assets/scribe_notes
	$(LATEXMK) -pdf -interaction=nonstopmode -halt-on-error -outdir=$(OUTDIR) main.tex
	cp $(OUTDIR)/main.pdf $(PDF_OUT)

clean:
	$(LATEXMK) -C -outdir=$(OUTDIR) main.tex
	rm -rf $(OUTDIR)
