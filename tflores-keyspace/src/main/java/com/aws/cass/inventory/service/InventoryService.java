package com.aws.cass.inventory.service;

import com.aws.cass.inventory.model.Inventory;

import java.util.List;
import java.util.UUID;

public interface InventoryService {
    List<Inventory> getAll();
    Inventory getInventoryById(UUID id);
    Inventory newInventory (Inventory product);
    Inventory updateInventory (UUID id, Inventory product);
    void addInInventory (List<Inventory> prods);
    void subtractInInventory(List<Inventory> prods);
    String deteleInventory (UUID id);
}
