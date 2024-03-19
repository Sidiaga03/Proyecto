'use client'
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";


export default function ProductModal() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color="primary">Add Product</Button>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Añadir Producto</ModalHeader>
              <ModalBody className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  autoFocus
                  label="Id_producto"
                  placeholder="Ingresa producto id"
                  variant="bordered"
                />
                <Input
                  label="Nombre"
                  placeholder="Nombre de producto"
                  variant="bordered"
                />
                <Input
                  label="Marca"
                  placeholder="Marca del producto"
                  variant="bordered"
                />
                <Input
                  label="Modelo"
                  placeholder="Modelo del producto"
                  variant="bordered"
                />
                <Input
                  label="Descripción"
                  placeholder="Descripción del producto"
                  variant="bordered"
                />
                <Input
                  label="Stock"
                  placeholder="Stock del producto"
                  variant="bordered"
                />
                <Input
                  label="Precio"
                  placeholder="Precio del producto"
                  variant="bordered"
                />
                <Input
                  label="Peso_kg"
                  placeholder="Peso del producto"
                  variant="bordered"
                />
                <Input
                  label="Color"
                  placeholder="Color del producto"
                  variant="bordered"
                />
                <Input
                  label="Img"
                  placeholder="Imagen del producto"
                  variant="bordered"
                />
                <Input
                  label="Categoria"
                  placeholder="Categoría del producto"
                  variant="bordered"
                />
                <Input
                  label="Proveedor"
                  placeholder="Proveedor del producto"
                  variant="bordered"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Crear
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

    </>
  );
}