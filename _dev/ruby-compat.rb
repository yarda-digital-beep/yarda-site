# Só para rodar o site no computador com Ruby 3.2+. O GitHub Pages não usa este arquivo.
# Liquid 4.0.3 (versão do GitHub Pages) chama métodos que saíram do Ruby.
class Object
  def tainted?; false; end unless method_defined?(:tainted?)
  def untaint; self; end unless method_defined?(:untaint)
  def taint; self; end unless method_defined?(:taint)
end
