import * as ts from "typescript";
import * as tstl from "typescript-to-lua";
import {writeFileSync, mkdirSync} from 'fs';
import * as path from 'path';

const outputFile = 'listing.txt'

const plugin: tstl.Plugin = {
  beforeEmit(program: ts.Program, options: tstl.CompilerOptions, emitHost: tstl.EmitHost, result: tstl.EmitFile[]) {
    void program;
    void emitHost;
	
	let length = options.outDir.length;
	
	if (!options.outDir.endsWith('/') && !options.outDir.endsWith('\\')) {
		length += 1;
	}

	const outputPath = path.join(options.outDir, outputFile);
	const paths = result
		.map(x => x.outputPath.slice(length))
		.map(x => x.replaceAll('\\', '/'));
	

	mkdirSync(path.dirname(outputPath), { recursive: true });
	writeFileSync(outputPath, paths.join('\n'));
  },
};

export default plugin;