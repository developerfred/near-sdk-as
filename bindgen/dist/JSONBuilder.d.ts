import { Node, FunctionDeclaration, Source, ClassDeclaration, Parser } from "./ast";
import { BaseVisitor } from "./base";
export declare function isEntry(source: Source | Node): boolean;
export declare class JSONBindingsBuilder extends BaseVisitor {
    private sb;
    private exportedClasses;
    wrappedFuncs: Set<string>;
    static build(parser: Parser, source: Source): string;
    static nearFiles(parser: Parser): Source[];
    visitClassDeclaration(node: ClassDeclaration): void;
    visitFunctionDeclaration(node: FunctionDeclaration): void;
    private generateWrapperFunction;
    private typeName;
    build(source: Source): string;
}
