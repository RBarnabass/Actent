package com.softserve.actent.repository;

import com.softserve.actent.model.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<Category,Long>{
    List<Category> findAllByParent(Category parent);
    Category findByName(String name);
}
